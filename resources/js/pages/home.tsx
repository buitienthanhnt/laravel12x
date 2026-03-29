
import type { InertiaConfig } from '@inertiajs/core';

export default function Home(props: InertiaConfig['sharedPageProps']) {

  console.log(props);
  
  return (
    <div>
      <h3>{props.demo as string}</h3>
    </div>
  );
}