import * as d3 from 'd3';
import React from 'react';

import { useD3 } from '../../hooks/useD3';
import { Dialog } from '../Dialog';

const SVG_HEIGHT_IN_PX = 1600;
const WIDTH_IN_PX = 1500;
const X_NODE_SIZE = 28;
const MAX_DEPTH = 4;
const TRANSITION_DURATION = 250;
const Y_NODE_SIZE = WIDTH_IN_PX / MAX_DEPTH;
const DEFAULT_MARGIN_IN_PX = {
    top: 10,
    right: 0,
    bottom: 10,
    left: -30,
};
const DEFAULT_MARGIN_IN_PX_ARRAY = [DEFAULT_MARGIN_IN_PX.left, -DEFAULT_MARGIN_IN_PX.top, WIDTH_IN_PX, X_NODE_SIZE];

// https://stackoverflow.com/questions/24784302/wrapping-text-in-d3/24785497
const wrap = (text, width) => {
    text.each(function () {
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 10, // ems
            x = text.attr('x'),
            y = text.attr('y'),
            tspan = text.text(null).append('tspan').attr('x', x).attr('y', y);
        while ((word = words.pop())) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text
                    .append('tspan')
                    .attr('x', x)
                    .attr('y', ++lineNumber * lineHeight + y)
                    .text(word);
            }
        }
    });
};

const getNodeColor = (node) => {
    if (node.data.name === 'Start') return '#262626';
    else if (!node._children && node.data.level !== 3) return 'gray';
    else {
        const parent = node.parent;
        const grandParent = parent.parent;
        const colorName =
            grandParent !== null
                ? grandParent.data.name === 'Start'
                    ? parent.data.name
                    : grandParent.data.name
                : parent.data.name === 'Start'
                    ? node.data.name
                    : parent.data.name;
        const hexColor = stringToColour(colorName);
        if (node.data.level === 1) return increaseBrightness(hexColor, 20);
        else if (node.data.level === 2) return increaseBrightness(hexColor, 40);
        else if (node.data.level === 3) return increaseBrightness(hexColor, 60);
        else return 'gray';
    }
};

const stringToColour = (str) => {
    let i;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 4) - hash);
    }
    let colour = '#';
    for (i = 0; i < 3; i++) {
        const value = (hash >> (i * 4)) & 0xff;
        colour += ('00' + value.toString(26)).substr(-2);
    }
    return colour;
};

const increaseBrightness = (hex, percent) => {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return (
        '#' +
        (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
        (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
        (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
    );
};

export const TreeChart = ({ data }) => {
    const [show, setShow] = React.useState(false);
    const [node, setNode] = React.useState();
    const [margins, setMargins] = React.useState(DEFAULT_MARGIN_IN_PX_ARRAY);

    const ref = useD3(
        (svg) => {
            const tree = d3.tree().nodeSize([X_NODE_SIZE, Y_NODE_SIZE]);
            const root = d3.hierarchy(data);

            const diagonal = d3
                .linkHorizontal()
                .x((node) => node.y)
                .y((node) => node.x);

            root.x0 = Y_NODE_SIZE;
            root.y0 = 0;
            root.descendants().forEach((node, i) => {
                node.id = i;
                node._children = node.children;
                if (node.depth > 1) node.children = null;
            });

            const showDetail = (node) => {
                const viewBox = svg.attr('viewBox').split(',');
                if (node.data.level === 3) {
                    setShow(true);
                    setMargins([Number(viewBox[0]), Number(viewBox[1]), Number(viewBox[2]), Number(viewBox[3])]);
                    setNode(node.data);
                }
            };

            const baseLink = svg
                .append('g')
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-opacity', 0.5)
                .attr('stroke-width', 1.5);

            const baseNode = svg.append('g').attr('cursor', 'pointer').attr('pointer-events', 'all');

            const update = (sourceNode) => {
                const nodes = root.descendants().reverse();
                const links = root.links();

                // Compute the new tree layout.
                tree(root);

                let left = root;
                let right = root;
                root.eachBefore((node) => {
                    if (node.x < left.x) left = node;
                    if (node.x > right.x) right = node;
                });

                const height = right.x - left.x + DEFAULT_MARGIN_IN_PX.top + DEFAULT_MARGIN_IN_PX.bottom;

                const transition = svg
                    .transition()
                    .duration(TRANSITION_DURATION)
                    .attr('viewBox', [DEFAULT_MARGIN_IN_PX.left, left.x - DEFAULT_MARGIN_IN_PX.top, WIDTH_IN_PX, height])
                    .tween('resize', window.ResizeObserver ? null : () => () => svg.dispatch('toggle'));

                // Update nodes.
                const node = baseNode.selectAll('g').data(nodes, (node) => node.id);

                // Enter any new nodes at the parent's previous position.
                const nodeEnter = node
                    .enter()
                    .append('g')
                    .attr('transform', (_node) => `translate(${sourceNode.y0},${sourceNode.x0})`)
                    .attr('fill-opacity', 0)
                    .attr('stroke-opacity', 0)
                    .on('click', (_event, node) => {
                        if (node.depth === 0) return;
                        node.children = node.children ? null : node._children;
                        update(node);
                        showDetail(node);
                    });

                nodeEnter
                    .append('rect')
                    .attr('width', 20)
                    .attr('height', 15)
                    .attr('rx', 5)
                    .attr('ry', 5)
                    .attr('y', -10)
                    .attr('fill', (node) => getNodeColor(node));

                nodeEnter
                    .append('text')
                    .attr('x', (node) => -2)
                    .attr('text-anchor', (node) => 'end')
                    .style('font-size', '12px')
                    .text((node) => node.data.name)
                    .call(wrap, 200)
                    .clone(true)
                    .lower()
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-width', 2)
                    .attr('stroke', 'white');

                // Transition nodes to their new position.
                node
                    .merge(nodeEnter)
                    .transition(transition)
                    .attr('transform', (node) => `translate(${node.y},${node.x})`)
                    .attr('fill-opacity', 1)
                    .attr('stroke-opacity', 1);

                // Transition exiting nodes to the parent's new position.
                node
                    .exit()
                    .transition(transition)
                    .remove()
                    .attr('transform', (_node) => `translate(${sourceNode.y},${sourceNode.x})`)
                    .attr('fill-opacity', 0)
                    .attr('stroke-opacity', 0);

                // Add the link between the nodes
                const link = baseLink.selectAll('path').data(links, (node) => node.target.id);

                // Enter any new links at the parent's previous position.
                const linkEnter = link
                    .enter()
                    .append('path')
                    .attr('d', (_node) => {
                        const point = { x: sourceNode.x0, y: sourceNode.y0 - 30 };
                        return diagonal({ source: point, target: point });
                    });

                // Transition links to their new position.
                link.merge(linkEnter).transition(transition).attr('d', diagonal);

                // Transition exiting nodes to the parent's new position.
                link
                    .exit()
                    .transition(transition)
                    .remove()
                    .attr('d', (_node) => {
                        const point = { x: sourceNode.x, y: sourceNode.y };
                        return diagonal({ source: point, target: point });
                    });

                // Stash the old positions for transition.
                root.eachBefore((node) => {
                    node.x0 = node.x;
                    node.y0 = node.y;
                });
            };

            update(root);
        },
        [data.length],
    );

    return (
        <>
            <Dialog show={show} node={node} setShow={setShow} />
            <div style={{ height: '100%', width: WIDTH_IN_PX }}>
                <svg
                    ref={ref}
                    viewBox={[margins]}
                    style={{
                        // height: svgHeight,
                        height: SVG_HEIGHT_IN_PX,
                        width: '100%',
                        userSelect: 'none',
                    }}
                />
            </div>
        </>
    );
};
