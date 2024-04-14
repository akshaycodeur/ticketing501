import IssueStatusBadge from "@/app/(components)/IssueStatusBadge";
import { notFound } from "@/node_modules/next/navigation";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "@/app/(components)/Link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

interface Props {
	params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!issue) notFound();

	return (
		<div className="container mx-auto">
			<div className="flex-row md:flex  gap-10">
				<div className="w-full md:w-3/5 mx-auto bg-zinc-50 px-10 py-5 rounded-sm shadow-md">
					<Box>
						<IssueDetails issue={issue} />
					</Box>
				</div>

				<div className="w-full md:w-1/5 mx-auto">
					<Flex direction="column" gap="4">
						<EditIssueButton issueId={issue.id} />
						<DeleteIssueButton issueId={issue.id} />
					</Flex>
				</div>
			</div>
		</div>
	);
};

export default IssueDetailPage;
