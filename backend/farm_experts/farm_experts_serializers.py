from rest_framework import serializers
from .models import FarmExpert


class CreateFarmExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmExpert
        fields = [
            "id",
            "first_name",
            "last_name",
            "title",
            "bio",
            "phone_number",
            "username",
            "image_url",
        ]
