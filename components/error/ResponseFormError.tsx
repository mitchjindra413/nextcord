import {FormMessage} from '@/components/ui/form';
import { MdErrorOutline } from "react-icons/md";

const ResponseFormError = ({errorMessage}: {errorMessage: string}) => {
    return (
        <div className={"w-100 border flex items-center space-x-2 p-2 rounded border-destructive"}>
            <MdErrorOutline className={"text-destructive"}/>
            <FormMessage className={""}>
                {errorMessage}
            </FormMessage>
        </div>
    );
};
export default ResponseFormError;