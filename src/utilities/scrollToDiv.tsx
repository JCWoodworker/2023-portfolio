import React from "react"
export const scrollToDiv = (
	divName: string,
	setterFunctionBoolean: boolean = false,
	setterFunction?: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const element = document.getElementById(divName)
	if (setterFunctionBoolean && element !== null) {
		const yOffset = -66
		const y = element.getBoundingClientRect().top + window.scrollY + yOffset
		window.scrollTo({ top: y, behavior: "smooth" })
		setterFunction ? setterFunction(false) : null
		return
	}
	element?.scrollIntoView({ behavior: "smooth", block: "start" })
	return
}
