import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TopNav from "./TopNav"

describe("TopNav", () => {
	const mockScrollToDiv = jest.fn()
	const mockSetViewNavTopLinks = jest.fn()
	const navLinkList = ["Home", "Skills", "Projects", "Contact"]

	it("renders JC in nav-bar-top", () => {
		const { getByText } = render(
			<TopNav
				scrollToDiv={mockScrollToDiv}
				viewNavTopLinks={true}
				setViewNavTopLinks={mockSetViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		)

		expect(getByText("JC")).toBeInTheDocument()
	})

	it("calls setViewNavTopLinks when menu icon is clicked", () => {
		const { getByRole } = render(
			<TopNav
				scrollToDiv={mockScrollToDiv}
				viewNavTopLinks={true}
				setViewNavTopLinks={mockSetViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		)

		fireEvent.click(getByRole("img"))
		expect(mockSetViewNavTopLinks).toHaveBeenCalledWith(false)
	})

	it("renders navLinkList elements when viewNavTopLinks is true", () => {
		const { getByText } = render(
			<TopNav
				scrollToDiv={mockScrollToDiv}
				viewNavTopLinks={true}
				setViewNavTopLinks={mockSetViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		)

		navLinkList.forEach((link) => {
			expect(getByText(link)).toBeInTheDocument()
		})
	})

	it("calls scrollToDiv when nav link is clicked", () => {
		const { getByText } = render(
			<TopNav
				scrollToDiv={mockScrollToDiv}
				viewNavTopLinks={true}
				setViewNavTopLinks={mockSetViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		)

		fireEvent.click(getByText("Home"))
		expect(mockScrollToDiv).toHaveBeenCalledWith("Home")
	})
})
