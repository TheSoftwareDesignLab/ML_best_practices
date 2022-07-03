import * as React from 'react';
import {TreeChart} from "../../components/TreeChart";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Wrapper} from "./styles";

type Props = {
  data: any;
  onBackClick: () => void;
}
export const TaxPage: React.FC<Props> = ({data, onBackClick}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <ArrowBackIcon onClick={onBackClick} sx={{color: "#2f6ed4"}} />
      <TreeChart data={data}/>
    </Wrapper>
  )

}
