"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
	title: string;
	description: string;
}

const NewIssuePage = () => {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();
	const [error, setError] = useState("");

	return (
		<div className="max-w-xl mx-auto bg-zinc-50 px-10 py-5 rounded-sm shadow-md">
			<div className="max-w-xl ">
				<h2 className="text-[1.6rem] font-semibold mb-10 text-center capitalize text-zinc-600">
					Create a Ticket
				</h2>

				{error && (
					<Callout.Root color="red" className="mb-5">
						<Callout.Text>{error}</Callout.Text>
					</Callout.Root>
				)}

				<form
					className="space-y-3"
					onSubmit={handleSubmit(async (data) => {
						try {
							await axios.post("/api/issues", data);
							router.push("/issues");
						} catch (error) {
							setError("An unexpected error occurred.");
						}
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
