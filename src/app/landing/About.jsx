"use client";
import React from "react";
import { Element } from "react-scroll";

const About = () => {
	return (
		<Element className="flex flex-col justify-center items-center py-[1.5rem] px-0 gap-[2.25rem]" name="About">
			<div className="flex flex-col justify-center items-center gap-[0.25rem]">
			<h2 className=" text-[#222] heading-2 text-center">Why Join Us</h2>
			<p className="text-[#5D5D5D] text-center body-text">
				Bridging the gap between fellow alumni and current students in the
				computing department
			</p>
			</div>
			<div className="flex w-[90rem] py-0 px-[2.5rem] justify-center items-center gap-[4.75rem]">
				<div className="w-[31.5rem] flex flex-col px-[2.125rem] py-[1.125rem] items-center gap-[1rem] rounded-[0.5rem] border border-solid border-[#00B595] bg-white shadow-custom">
					<div className="flex flex-col gap-[0.5rem] self-stretch items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="3.125rem" viewBox="0 0 50 50" fill="none">
							<path d="M12.2917 50C8.95833 50 5.83333 48.75 3.54167 46.4584C1.25 44.1667 0 41.0417 0 37.7084C0 34.375 1.25 31.25 3.54167 28.9584L11.4583 21.0417L15.625 25.2084L21.4583 19.375L24.375 22.2917L18.5417 28.125L21.875 31.4584L27.7083 25.625L30.625 28.5417L24.7917 34.375L28.9583 38.5417L21.25 46.4584C18.75 48.5417 15.625 50 12.2917 50ZM11.4583 26.875L6.66667 31.6667C5 33.3334 4.16667 35.4167 4.16667 37.5C4.16667 39.5834 5 41.6667 6.66667 43.3334C9.79167 46.4584 15.2083 46.4584 18.3333 43.3334L23.125 38.3334L11.4583 26.875ZM38.5417 28.9584L21.0417 11.4584L28.75 3.5417C31.0417 1.25003 34.375 3.05176e-05 37.5 3.05176e-05C40.625 3.05176e-05 43.75 1.25003 46.25 3.5417C48.75 5.83336 50 8.95836 50 12.2917C50 15.625 48.75 18.75 46.4583 21.0417L38.5417 28.9584ZM27.0833 11.4584L38.5417 22.9167L43.3333 18.125C45 16.4584 45.8333 14.5834 45.8333 12.2917C45.8333 10.2084 45 8.12503 43.3333 6.45836C40.2083 3.33336 35 3.33336 31.6667 6.45836L27.0833 11.4584Z" fill="#F45D01" />
						</svg>
						<p className="sub-heading-2">Share and Engage</p>
					</div>
					<p className="text-[#5D5D5D] body-text text-center">
						Post insights, experiences, and multimedia content.
					</p>
					<p className="text-[#5D5D5D] body-underline">
						<a href="./login">Share now  &#x3E; </a>
					</p>
				</div>

				<div className="flex flex-col w-[31.5rem] px-[2.125rem] py-[1.125rem] items-center gap-[1rem] rounded-[0.5rem] border border-solid border-[#00B595] bg-white shadow-custom">
					<div className="flex flex-col gap-[0.5rem] self-stretch items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2.8rem"
							height="3.125rem"
							viewBox="0 0 46 50"
							fill="none"
						>
							<path
								d="M24.8729 7.29766C26.8882 7.29766 28.5225 5.66406 28.5225 3.64883C28.5225 1.6335 26.8882 0 24.8729 0C22.8583 0 21.2247 1.6335 21.2247 3.64883C21.2247 5.66406 22.8583 7.29766 24.8729 7.29766Z"
								fill="#0A96C3"
							/>
							<path
								d="M34.3475 41.0152H25.5831V34.6334H16.8219V28.2503H8.05789V21.8671H0.593628V24.4688H5.45691V30.8519H14.221V37.2351H22.9821V43.617H31.7468V50.0001H42.945V47.3991L34.3475 47.3984V41.0152Z"
								fill="#0A96C3"
							/>
							<path
								d="M44.6784 17.6995C44.6162 17.2852 44.2303 16.9995 43.8153 17.0616L42.0639 17.3248L41.9143 16.3292C41.8522 15.9242 41.4754 15.6469 41.071 15.7068L40.8876 15.7344C40.8621 15.565 40.8036 15.3977 40.707 15.2439L38.178 11.1999C37.9049 10.7637 37.4893 10.4363 37.0009 10.2733L32.4222 8.13807C30.8737 7.41619 29.0814 7.49383 27.596 8.3159L26.6441 14.1063L23.1159 11.1151L20.2954 12.8912L16.176 10.9577C15.536 10.5992 14.7287 10.8117 14.3485 11.4382L14.2962 11.5228C14.1085 11.8341 14.0507 12.2058 14.1382 12.5581C14.2249 12.9102 14.4501 13.2129 14.7619 13.3991L19.6718 16.329C20.2822 16.6938 21.0267 16.7595 21.692 16.5083L24.5999 14.9418L25.9787 20.5035L21.3955 20.4803C20.6236 20.4781 19.8905 20.8204 19.3979 21.4152C18.9053 22.01 18.7057 22.794 18.8524 23.5526L20.3942 31.4903C20.5649 32.3695 21.3983 32.9581 22.2838 32.8255L22.3501 32.8155C23.2273 32.6843 23.8489 31.8919 23.7677 31.0091L23.2455 25.3216L30.1615 25.4825C31.1543 25.5051 32.1037 25.0766 32.7438 24.3168C33.3838 23.5575 33.6442 22.5484 33.453 21.5732L33.2758 20.6743L31.8535 12.647L35.519 13.1882L38.2004 16.2979C38.0424 16.4589 37.9499 16.679 37.9852 16.9189L38.1348 17.916L36.3841 18.1792C35.9692 18.2413 35.6841 18.6279 35.7469 19.0429L36.4659 23.827C36.5288 24.2412 36.9148 24.527 37.329 24.4649L44.7608 23.3471C45.175 23.285 45.4601 22.8983 45.398 22.4835L44.6784 17.6995ZM26.8247 16.4547C26.8247 16.2049 27.0273 16.003 27.2763 16.003C27.5253 16.003 27.7279 16.2049 27.7279 16.4547C27.7279 16.7045 27.5253 16.9062 27.2763 16.9062C27.0273 16.9062 26.8247 16.7045 26.8247 16.4547ZM27.7575 19.4353C27.5084 19.4353 27.3059 19.2336 27.3059 18.9838C27.3059 18.734 27.5084 18.5322 27.7575 18.5322C28.0066 18.5322 28.2091 18.734 28.2091 18.9838C28.2091 19.2336 28.0067 19.4353 27.7575 19.4353ZM38.6981 16.8597C39.1208 17.2704 39.7707 17.348 40.2759 17.0276L40.3056 17.0086C40.5187 16.8738 40.6768 16.6847 40.777 16.473L41.1778 16.4124L41.2088 16.435L41.3584 17.4313L38.8408 17.8095L38.6981 16.8597Z"
								fill="#0A96C3"
							/>
							<path
								d="M36.4444 37.5817C37.0583 38.2231 38.0723 38.2619 38.7335 37.6684L38.7808 37.6268C39.4399 37.0355 39.5119 36.0271 38.9445 35.3462L35.1651 30.2748L33.9598 24.4031C33.878 24.5209 33.794 24.6375 33.7009 24.7482C32.8019 25.8158 31.4848 26.4283 30.0884 26.4283L29.4462 26.4134L30.8553 30.9944C31.1813 31.669 31.6054 32.2928 32.1125 32.8467L36.4444 37.5817Z"
								fill="#0A96C3"
							/>
							<path
								d="M24.7567 11.6112L25.9217 12.2096L26.4036 10.9197L25.7749 9.57764L24.2472 10.5231L24.7567 11.6112Z"
								fill="#0A96C3"
							/>
						</svg>
						<p className="sub-heading-2">Career Opportunities</p>
					</div>
					<p className="text-[#5D5D5D] text-center body-text">
						Explore job postings curated specifically for you.
					</p>
					<p className="text-[#5D5D5D] body-underline">
						<a href="./login">Explore now  &#x3E;</a>
					</p>
				</div>
				<div className="flex flex-col w-[31.5rem] px-[2.125rem] py-[1.125rem] items-center gap-[1rem] rounded-[0.5rem] border border-solid border-[#00B595] bg-white shadow-custom">
					<div className="flex flex-col gap-[0.5rem] self-stretch items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="3rem"
							height="3rem"
							viewBox="0 0 52 53"
							fill="none"
						>
							<path
								d="M38 2.00003C38.4732 2.45008 38.8485 2.98453 39.1046 3.57283C39.3607 4.16114 39.4925 4.79175 39.4925 5.4286C39.4925 6.06546 39.3607 6.69607 39.1046 7.28437C38.8485 7.87267 38.4732 8.40713 38 8.85717L4.40002 40.8572L9.20002 45.4286L14 50L48.296 17.3372C48.8366 16.8248 49.2654 16.2157 49.5579 15.545C49.8503 14.8742 50.0006 14.1549 50 13.4286C50 10.3976 48.7357 7.49065 46.4853 5.34738C44.2349 3.20411 41.1826 2.00003 38 2.00003Z"
								stroke="#EEB902"
								stroke-width="3"
								stroke-miterlimit="10"
							/>
							<path
								d="M35.6 29.4286L47.6 40.8572L38 50L26 38.5715"
								stroke="#EEB902"
								stroke-width="3"
								stroke-miterlimit="10"
							/>
							<path
								d="M26 20.2857L14 8.85717C13.5269 8.40713 13.1515 7.87267 12.8954 7.28437C12.6393 6.69607 12.5075 6.06546 12.5075 5.4286C12.5075 4.79175 12.6393 4.16114 12.8954 3.57283C13.1515 2.98453 13.5269 2.45008 14 2.00003C10.8174 2.00003 7.76516 3.20411 5.51472 5.34738C3.26428 7.49065 2 10.3976 2 13.4286C1.99945 14.1549 2.14971 14.8742 2.44215 15.545C2.7346 16.2157 3.16344 16.8248 3.704 17.3372L16.4 29.4286"
								stroke="#EEB902"
								stroke-width="3"
								stroke-linejoin="bevel"
							/>
							<path
								d="M14 2.00003H16.4H26.048H38"
								stroke="#EEB902"
								stroke-width="3"
								stroke-miterlimit="10"
							/>
						</svg>
						<p className="sub-heading-2">Support</p>
					</div>
					<p className="text-[#5D5D5D] body-text text-center">
						Contribute to departmental initiatives.
					</p>
					<p className="text-[#5D5D5D] body-underline" >
						<a href="./login">Join now  &#x3E;</a>
					</p>
				</div>
			</div>
		</Element>
	);
};

export default About;
