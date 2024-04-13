"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

interface IssueForm {
	title: string;
	description: string;
}

const NewIssuePage = () => {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();

	return (
		<div className="max-w-xl mx-auto bg-zinc-50 px-10 py-5 rounded-sm shadow-md">
			<div className="max-w-xl ">
				<h2 className="text-[1.6rem] font-semibold mb-10 text-center capitalize text-zinc-600">
					Create a Ticket
				</h2>
				<form
					className="space-y-3"
					onSubmit={handleSubmit(async (data) => {
						await axios.post("/api/issues", data);
						router.push("/issues");
					})}
				>
					<TextField.Root placeholder="Title" {...register("title")} />
					<Controller
						name="description"
						control={control}
						render={({ field }) => (
							<SimpleMDE placeholder="Description" {...field} />
						)}
					/>
					<div className="flex justify-end">
						<Button>Submit New Issue</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewIssuePage;
