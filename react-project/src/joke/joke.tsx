import { useParams } from "react-router-dom";
import { useJoke } from "./use-joke";
import { Modal } from "../modal/modal";

export function Joke() {
  const { category } = useParams();
  const { joke, isLoading, fetchNext } = useJoke(category);

  return <div style={{position:'relative'}}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dolore totam nobis voluptatibus ab, veniam ipsa cum eos esse ipsam repellendus, placeat fugit unde! Veritatis explicabo doloribus laboriosam maiores necessitatibus.
    <Modal>
      <p data-testid="joke">{joke}</p>
    </Modal>

    <button disabled={isLoading} onClick={fetchNext}>Load next joke</button>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae eum obcaecati mollitia. Numquam doloribus, sunt quas magnam saepe error omnis quidem architecto dolore blanditiis, doloremque, quaerat obcaecati! Laboriosam, voluptas?
  </div>
}