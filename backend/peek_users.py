from sqlalchemy import create_engine, text

# same URL as in main.py
engine = create_engine("sqlite:///./users.db", connect_args={"check_same_thread": False})

with engine.connect() as conn:
    rows = conn.execute(
        text("SELECT id, name, email, created_at FROM users")
    ).fetchall()

for row in rows:
    print(row)
