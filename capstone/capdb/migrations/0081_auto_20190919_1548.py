# Generated by Django 2.2.4 on 2019-09-19 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0080_auto_20190918_1943'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='editlog',
            options={'ordering': ['-timestamp']},
        ),
    ]
