from rest_framework import serializers
from .models import ContactUs


class CreateContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ["id", "name", "email", "message"]
