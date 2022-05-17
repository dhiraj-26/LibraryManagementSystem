from django.db import migrations, models
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="dhiraj", email="dhirajpatil0026@gmail.com", is_staff=True, is_superuser=True)
        user.set_password("12345")
        user.save()

    dependencies = [
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
