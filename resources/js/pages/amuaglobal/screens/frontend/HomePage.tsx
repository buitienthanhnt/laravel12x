import { router, usePage } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { MainCategory } from "../../components/home-page";

export default function HomePage() {
  const {props} = usePage();

  
  return (
    <div>
      <Button onClick={() => {
        router.get('/adminhtml');
      }}>Dashboard</Button>
      <MainCategory></MainCategory>
    </div>

  );
}

