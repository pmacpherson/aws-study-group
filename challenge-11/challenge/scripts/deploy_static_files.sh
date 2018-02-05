#!/bin/bash
set -eu

STACK="${1}"
echo "Querying Stack: ${STACK}..."

BUCKET_NAME=$(aws \
  cloudformation describe-stacks \
  --stack-name "${STACK}" \
  --query "Stacks[0].Outputs[?OutputKey=='WebSiteBucket'] | [0].OutputValue" \
  --output text)

echo "Deploying static assets to Bucket: ${BUCKET_NAME}..."
aws s3 sync --acl 'public-read' --delete ./src/ "s3://${BUCKET_NAME}/"
echo "Deploy COMPLETE"