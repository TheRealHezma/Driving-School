# import boto3
# import os
# import uuid

# def upload_file_to_s3(file, filename):
#     s3 = boto3.client(
#         "s3",
#         aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
#         aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
#         region_name=os.getenv("AWS_REGION")
#     )

#     bucket = os.getenv("AWS_BUCKET_NAME")
#     file_extension = filename.split('.')[-1]
#     key = f"cookies/{uuid.uuid4()}.{file_extension}"

#     try:
#         s3.upload_fileobj(file, bucket, key, ExtraArgs={"ACL": "public-read", "ContentType": file.content_type})
#         return f"https://{bucket}.s3.amazonaws.com/{key}"
#     except Exception as e:
#         print("S3 upload error:", e)
#         return None
