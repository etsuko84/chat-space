json.body @message.body
json.image @message.image
json.user_name @message.user.name
json.time format_posted_time(@message.created_at)
json.id @message.id
