import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "@/node_modules/next/link";

const issues = () => {
	return (
		<div>
			<Link href="/issues/new">
				<Button>New Issues</Button>
			</Link>
		</div>
	);
};

export default issues;
