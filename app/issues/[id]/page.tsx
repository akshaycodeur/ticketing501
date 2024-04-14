import IssueStatusBadge from "@/app/(components)/IssueStatusBadge";
import { notFound } from "@/node_modules/next/navigation";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
	params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!issue) notFound();

	return (
		<div className="max-w-xl mx-auto bg-zinc-50 px-10 py-5 rounded-sm shadow-md">
			<Heading>{issue.title}</Heading>
			<Flex className="space-x-3" my="2">
				<IssueStatusBadge status={issue.status} />
				<Text>{issue.createdat.toDateString()}</Text>
			</Flex>
			<Card className="prose" mt="4">
				<ReactMarkdown>{issue.description}</ReactMarkdown>
			</Card>
		</div>
	);
};

export default IssueDetailPage;
