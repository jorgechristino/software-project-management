# Generated by Django 5.1.1 on 2024-10-20 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('midia', '0002_alter_midia_genres_alter_midia_platforms'),
    ]

    operations = [
        migrations.AlterField(
            model_name='midia',
            name='genres',
            field=models.ManyToManyField(related_name='midias', to='midia.genres'),
        ),
    ]
