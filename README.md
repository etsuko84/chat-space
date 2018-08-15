# DB設計

## users_table

|column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true, index: true|


### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages



## members_table

|column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groups_table

|column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages



## messages_table

|column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|body|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user
