import {
  Index__FileHidden,
  Index__FileInput,
  Index__Statistics__container,
  Index__Statistics__element__IC,
  Index__Title_Stat,
  Index__Wrapper,
} from "./Index.styles";

export default function IndexUI(props) {
  //HTML Section
  return (
    <Index__Wrapper>
      <Index__FileInput as="label" htmlFor="input-file" onClick={props.aaa}>
        Input .run File Here!
      </Index__FileInput>
      <Index__FileHidden type="file" id="input-file"></Index__FileHidden>
      <Index__Title_Stat>Statistics Online</Index__Title_Stat>
      <Index__Statistics__container>
        <Index__Statistics__element__IC></Index__Statistics__element__IC>
        <Index__Statistics__element__IC></Index__Statistics__element__IC>
        <Index__Statistics__element__IC></Index__Statistics__element__IC>
        <Index__Statistics__element__IC></Index__Statistics__element__IC>
      </Index__Statistics__container>
    </Index__Wrapper>
  );
}
