import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

type NavToolTip = {
    message: string,
    children: React.ReactNode,
    side?: "right" | "left" | "top" | "bottom",
    align?: "start" | "center" | "end",
};

const NavToolTip = ({message, side, align, children}: NavToolTip) => {

    return (
        <TooltipProvider>
            <Tooltip delayDuration={30}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent align={align} side={side}>
                    <p className={"font-semibold text-sm"}>
                        {message}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default NavToolTip;