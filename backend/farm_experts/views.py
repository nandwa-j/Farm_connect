import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from django.core.exceptions import ValidationError
from rest_framework import status
from .farm_experts_serializers import CreateFarmExpertSerializer
from .models import FarmExpert

# Configure logging
logger = logging.getLogger(__name__)


# Create farm expert
class CreateFarmExpertView(APIView):
    @swagger_auto_schema(
        tags=["Farm Expert"],
        request_body=CreateFarmExpertSerializer,
        responses={
            201: CreateFarmExpertSerializer,
            400: "Validation Error",
            500: "Unexpected Error",
        },
    )
    def post(self, request, *args, **kwargs):
        """
        Create a new farm expert
        """
        serializer = CreateFarmExpertSerializer(data=request.data)
        if serializer.is_valid():
            try:
                farm_expert = serializer.save()
                logger.debug(f"Created farm expert: {farm_expert}")
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


# Get all farm experts
class ListFarmExpertsView(APIView):
    @swagger_auto_schema(
        tags=["Farm Expert"], responses={200: CreateFarmExpertSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        """
        Get all farm experts
        """
        farm_experts = FarmExpert.objects.all()
        serializer = CreateFarmExpertSerializer(farm_experts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Get single farm expert by ID
class GetSingleFarmExpertView(APIView):
    @swagger_auto_schema(
        tags=["Farm Expert"],
        responses={200: CreateFarmExpertSerializer(), 404: "Not Found"},
    )
    def get(self, request, farm_expert_id, *args, **kwargs):
        """
        Get a farm expert by ID
        """
        try:
            farm_expert = FarmExpert.objects.get(id=farm_expert_id)
        except FarmExpert.DoesNotExist:
            return Response(
                f"Farm expert with ID {farm_expert_id} not found",
                status=status.HTTP_404_NOT_FOUND,
            )
        serializer = CreateFarmExpertSerializer(farm_expert)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Update single farm expert by ID
class UpdateSingleFarmExpertView(APIView):
    @swagger_auto_schema(
        tags=["Farm Expert"],
        request_body=CreateFarmExpertSerializer,
        responses={
            200: CreateFarmExpertSerializer,
            400: "Validation Error",
            404: "Not Found",
            500: "Unexpected Error",
        },
    )
    def patch(self, request, farm_expert_id, *args, **kwargs):
        """
        Update a farm expert by ID
        """
        try:
            farm_expert = FarmExpert.objects.get(id=farm_expert_id)
        except FarmExpert.DoesNotExist:
            return Response(
                {"error": f"Farm expert with ID {farm_expert_id} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = CreateFarmExpertSerializer(farm_expert, data=request.data, partial=True)
        if serializer.is_valid():
            try:
                updated_farm_expert = serializer.save()
                logger.debug(f"Updated farm expert: {updated_farm_expert}")
                return Response(serializer.data, status=status.HTTP_200_OK)
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


# Delete single farm expert by ID
class DeleteSingleFarmExpertView(APIView):
    @swagger_auto_schema(
        tags=["Farm Expert"],
        responses={204: "Deleted", 404: "Not Found"},
    )
    def delete(self, request, farm_expert_id, *args, **kwargs):
        """
        Delete a farm expert by ID
        """
        try:
            farm_expert = FarmExpert.objects.get(id=farm_expert_id)
            farm_expert.delete()
        except FarmExpert.DoesNotExist:
            return Response(
                f"Farm expert with ID {farm_expert_id} not found",
                status=status.HTTP_404_NOT_FOUND,
            )
        return Response(status=status.HTTP_204_NO_CONTENT)
