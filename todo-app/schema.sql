CREATE TABLE account (
    Name TEXT NOT NULL UNIQUE,
    account_id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    list_id UUID REFERENCES ToDo_List(list_id),
    dark_mode BOOLEAN DEFAULT false,
    total_coins int DEFAULT 0
);

CREATE TABLE ToDo_List (
    list_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Task TEXT NOT NULL,
    task_id UUID REFERENCES task(task_id)
);

CREATE TABLE task(
    task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    due_date DATE DEFAULT NULL,
    coins int DEFAULT 1,
    completion BOOLEAN DEFAULT false
);

CREATE TABLE characters (
    coin_cost int DEFAULT 1,
    character_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    unlocked BOOLEAN DEFAULT false,
    account_id UUID REFERENCES account(account_id)
);