import {
  Index__FileHidden,
  Index__FileInput,
  Index__Form,
  Index__Statistics__container,
  Index__Statistics__element__IC,
  Index__Title_Stat,
  Index__Wrapper,
} from "./Index.styles";

export default function IndexUI(props) {
  //HTML Section
  return (
    <Index__Wrapper>
      <Index__Form onSubmit={props.hs}>
        <Index__FileInput as="label" htmlFor="input-file">
          Input .run File Here!
        </Index__FileInput>
        <Index__FileHidden
          type="file"
          accept=".json"
          id="input-file"
          onChange={props.hfc}
        ></Index__FileHidden>
      </Index__Form>
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
