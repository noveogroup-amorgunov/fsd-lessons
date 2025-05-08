type Props = {
  label?: string
  id?: string
  type?: string
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: Props) {
  return (
    <fieldset className="mb-[15px] flex items-center gap-5">
      {props.label && (
        <label
          className="w-[90px] text-right text-[15px]"
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
      <input
        className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </fieldset>
  )
}
