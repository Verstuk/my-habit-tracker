import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return ( 
        <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
           <span className="font-bold text-4xl text-center">
           Выработайте важные  <span className="text-customRed">привычки</span>
           </span>
           <p className="text-center text-md sm:w-[430px] w-[370px]">
           Чувствуете себя подавленным? Наш простой в использовании трекер привычек поможет вам взять под контроль свой день и достичь поставленных целей
           </p>
           <Button
           style={{ borderRadius: '8px' }}
           className={`block text-sm font-medium text-white hover:bg-customRed/70 bg-customRed`}
           type="button"
           >
           Попробовать сейчас
           </Button>
        </div>
     );
}
 
export default HeroSection;