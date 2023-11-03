import { sayHello } from "@alter/lib";
import { Atoms } from "@alter/ui";

export default function Home() {
  return (
    <div>
      <Atoms.Title level={1}>제목입니다.</Atoms.Title>
      {sayHello()}
    </div>
  );
}
