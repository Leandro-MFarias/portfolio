import { TypeAnimation } from "react-type-animation";
import '../Hero/hero.css'

export function TypeDev() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1500,
        "React Developer",
        1500,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      className='text-dev'
    />
  );
}