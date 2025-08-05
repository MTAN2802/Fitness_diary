from sqlalchemy import create_engine
import pandas as pd

file_path = 'gymworkout.csv'
engine = create_engine("postgresql://postgres:12345678@localhost:5432/postgres")
data = pd.read_csv(file_path)
data.to_sql('Workout', engine, index=False, if_exists='append')