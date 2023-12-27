import { InputProps } from "@/utils/interfaces"

export function Input({onChange, className, value}: InputProps) {

    return (
        <input type="text" onChange={onChange} className={className} value={value}/>
    )
}