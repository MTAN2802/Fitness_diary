from sqlalchemy import create_engine
import pandas as pd
import os

csv_files = ['gymsession', 'gymworkout', 'mtworkout', 'runningworkout', 'otherworkout']
for entry in range(len(csv_files)):
    engine = create_engine("postgresql://postgres:12345678@localhost:5432/postgres")
    file_path = f'{entry}.csv'
    if os.path.exists(file_path):
        data = pd.read_csv(file_path)
        data.to_sql(entry, engine, index=False, if_exists='append')