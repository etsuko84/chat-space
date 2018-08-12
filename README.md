# DB設計

## users_table

|column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|
|email|string|null: false, unique:true|
|password|string|null: false|

### Association
- has_many :members
- has_many :messages



## members_table

|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groups_table

|column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- belongs_to :group
- belongs_to :user



## massages_table

|column|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string||
|time|timestamps|null: false|

### Association
- belongs_to :group
- belongs_to :user
