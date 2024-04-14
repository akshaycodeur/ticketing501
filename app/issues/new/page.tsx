"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/(components)/ErrorMessage";
import Spinner from "@/app/(components)/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IssueForm>({
		resolver: zodResolver(createIssueSchema),
	});
	const [error, setError] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);

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
							setSubmitting(true);
							await axios.post("/api/issues", data);
							router.push("/issues");
						} catch (error) {
							setSubmitting(false);
							setError("An unexpected error occurred.");
						}
					})}
				>
					<TextField.Root placeholder="Title" {...register("title")} />
					<ErrorMessage>{errors.title?.message}</ErrorMessage>
					<Controller
						name="description"
						control={control}
						render={({ field }) => (
							<SimpleMDE placeholder="Description" {...field} />
						)}
					/>
					<ErrorMessage>{errors.description?.message}</ErrorMessage>
					<div className="flex justify-end">
						<Button disabled={isSubmitting}>
							Submit New Issue {isSubmitting && <Spinner />}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewIssuePage;
