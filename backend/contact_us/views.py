import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from django.core.exceptions import ValidationError
from rest_framework import status
from .serializers import CreateContactUsSerializer

# Configure logging
logger = logging.getLogger(__name__)


# Create contact us
class CreateContactUsView(APIView):
    @swagger_auto_schema(
        tags=["Contact"],
        request_body=CreateContactUsSerializer,
        responses={
            201: CreateContactUsSerializer,
            400: "Validation Error",
            500: "Unexpected Error",
        },
    )
    def post(self, request, *args, **kwargs):
        """
        Create new contact
        """
        serializer = CreateContactUsSerializer(data=request.data)
        if serializer.is_valid():
            try:
                farm_expert = serializer.save()
                logger.debug(f"Created contact us: {farm_expert}")
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except ValidationError as e:
                logger.error(f"Validation error: {str(e)}")
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                logger.error(f"Unexpected error: {str(e)}")
                return Response(
                    {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
