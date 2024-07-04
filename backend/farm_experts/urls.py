from django.urls import path
from .views import (
    ListFarmExpertsView,
    CreateFarmExpertView,
    GetSingleFarmExpertView,
    UpdateSingleFarmExpertView,
    DeleteSingleFarmExpertView,
)

urlpatterns = [
    path(
        "farm-experts/get-all/", ListFarmExpertsView.as_view(), name="get_farm_experts"
    ),
    path(
        "farm-experts/create/",
        CreateFarmExpertView.as_view(),
        name="create_farm_experts",
    ),
    path(
        "farm-experts/get-farm-expert/<int:farm_expert_id>/",
        GetSingleFarmExpertView.as_view(),
        name="get_farm_expert_by_ID",
    ),
    path(
        "farm-experts/update-farm-expert/<int:farm_expert_id>/",
        UpdateSingleFarmExpertView.as_view(),
        name="update_farm_expert_by_ID",
    ),
    path(
        "farm-experts/delete-farm-expert/<int:farm_expert_id>/",
        DeleteSingleFarmExpertView.as_view(),
        name="delete_farm_expert_by_ID",
    ),
]
