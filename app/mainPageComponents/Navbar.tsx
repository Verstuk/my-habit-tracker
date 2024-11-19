import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
    const defaultColor = "#d90429"
    const backgroundColorObject = {
        backgroundColor: defaultColor
    }
    return (
        <header>
            <div className="p-8 px-20">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left mb-7 sm:mb-0">
                        {/* Icon + Name of the App */}
                        {/* ---------------------- */}
                        <div className="flex gap-2 items-center sm:justify-start justify-center">
                            <span className="text-2xl font-light flex items-center gap-2">
                                {/* The Icon */}
                                <div style={backgroundColorObject} 
                                className="p-2 rounded-[10px] flex items-center justify-center"
                                >
                                    <Image src="/stopwatch.svg" alt="Stopwatch icon" width={32} height={32} />
                                </div>
                                {/* The Name of the app */}
                                <span
                                    style={{ color: "#d90429" }}
                                    className="font-bold text-mainColor"
                                >
                                    Мои
                                </span>
                                <span className="font-light">привычки</span>
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    {/* The buttons */}
                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Button
                            style={{borderRadius: '8px' }}
                            className={`block w-full sm:w-32 rounded-lg px-9 py-3 text-sm font-medium text-white hover:bg-customRed/70 bg-customRed`}
                            type="button"
                        >
                            Войти
                        </Button>
                        <Button
                        variant={"outline"}
                        style={{ borderRadius: '8px' }}
                            className={`block w-full sm:w-32 border rounded-lg px-2 text-sm font-medium text-customRed transition focus:outline-none hover:bg-customRed hover:text-white border-customRed`}
                            type="button"
                        >
                        Регистрация
                        </Button>

                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;