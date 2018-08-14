# DB設計

## users_table

|column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|


### Association
- has_many:groups,through:members
- has_many :members
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
- belongs_to :member
- belongs_to :massage



## massages_table

|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user
