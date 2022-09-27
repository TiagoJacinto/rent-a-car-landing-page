import LoadingCircle from '../../images/circle.796821d23ea8d31010095ff7edc39936.svg';
import Icon from '../../images/icon.b6bc61f3d105273cee577bd649d774b8.svg';
import { CenterDiv, CircleImg, IconImg } from './styles';

export default function LoadingScreen() {
  return (
    <CenterDiv>
      <CircleImg
        animate={{ rotate: 150 }}
        transition={{ duration: 1.5 }}
        src={LoadingCircle}
      />
      <IconImg src={Icon} />
    </CenterDiv>
  );
}
