{
	"Statement": [
	  {
			"Action": [
				"s3:GetObject",
				"s3:GetObjectVersion",
				"s3:GetBucketVersioning"
			],
			"Resource": "*",
			"Effect": "Allow"
		},
		{
			"Action": [
				"s3:PutObject"
			],
			"Resource": [
				"arn:aws:s3:::codepipeline*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"lambda:*"
			],
			"Resource": [
				"arn:aws:lambda:us-east-2:038334593726:function:*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"apigateway:*"
			],
			"Resource": [
				"arn:aws:apigateway:us-east-2::*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"iam:GetRole",
				"iam:CreateRole",
				"iam:DeleteRole",
				"iam:PutRolePolicy"
			],
			"Resource": [
				"arn:aws:iam::038334593726:role/*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"iam:AttachRolePolicy",
				"iam:DeleteRolePolicy",
				"iam:DetachRolePolicy"
			],
			"Resource": [
				"arn:aws:iam::038334593726:role/*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"iam:PassRole"
			],
			"Resource": [
				"*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"cloudformation:CreateChangeSet"
			],
			"Resource": [
				"arn:aws:cloudformation:us-east-2:aws:transform/Serverless-2016-10-31"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"codedeploy:CreateApplication",
				"codedeploy:DeleteApplication",
				"codedeploy:RegisterApplicationRevision"
			],
			"Resource": [
				"arn:aws:codedeploy:us-east-2:038334593726:application:*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"codedeploy:CreateDeploymentGroup",
				"codedeploy:CreateDeployment",
				"codedeploy:GetDeployment"
			],
			"Resource": [
				"arn:aws:codedeploy:us-east-2:038334593726:deploymentgroup:*"
			],
			"Effect": "Allow"
		},
		{
			"Action": [
				"codedeploy:GetDeploymentConfig"
			],
			"Resource": [
				"arn:aws:codedeploy:us-east-2:038334593726:deploymentconfig:*"
			],
			"Effect": "Allow"
		}
	],
	"Version": "2012-10-17"
}