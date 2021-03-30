import PageExplanation from "../PageExplanation/PageExplanation";

const heading: string = "학교가 불편한 순간 TOP 10";
const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const Top10Page: React.FC = () => {
  return (
    <>
      <PageExplanation heading={heading} explanation={explanation} />
      {/* <Btn /> */}
    </>
  );
};

export default Top10Page;
