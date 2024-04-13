"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
	return (
		<div className="max-w-xl mx-auto bg-zinc-50 px-10 py-5 rounded-sm shadow-md">
			<div className="max-w-xl space-y-3">
				<h2 className="text-[1.6rem] font-semibold mb-10 text-center capitalize text-zinc-600">
					Create a Ticket
				</h2>
				<TextField.Root placeholder="Title" />
				<SimpleMDE placeholder="Description" />
				<div className="flex justify-end">
					<Button>Submit New Issue</Button>
				</div>
			</div>
		</div>
	);
};

export default NewIssuePage;
