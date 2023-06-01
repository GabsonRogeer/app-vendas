import { InputHTMLAttributes} from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    onChange: (value: any) => void;
    label: string;
    columnClasses?: string
    htmlFor: string
    
}

export const FormInput: React.FC<FormInputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    ...inputProps
}: FormInputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
            <label htmlFor={id} className="label">{label}</label>
                <div className="control">
                    <input className="input" type="text"
                        id={id} {...inputProps}
                        onChange={event => {
                            if (onChange){
                                onChange(event.target.value)
                            }
                        }}/>
                </div>
        </div>
    )
}