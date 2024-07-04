from django.db import models
from django.core.validators import MinLengthValidator


# Farm expert model
class FarmExpert(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, validators=[MinLengthValidator(10)], unique=True)
    username = models.CharField(unique=True, max_length=255)
    image_url = models.CharField(max_length=255)
