# Generated by Django 2.2.13 on 2020-07-17 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0104_auto_20200710_1737'),
    ]

    operations = [
        migrations.AddField(
            model_name='historicalvolumemetadata',
            name='description',
            field=models.TextField(blank=True, help_text='Optional description to display about this volume on the frontend', null=True),
        ),
        migrations.AddField(
            model_name='volumemetadata',
            name='description',
            field=models.TextField(blank=True, help_text='Optional description to display about this volume on the frontend', null=True),
        ),
    ]
