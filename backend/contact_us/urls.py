from django.urls import path
from .views import CreateContactUsView

urlpatterns = [
    path(
        "contact-us/create/",
        CreateContactUsView.as_view(),
        name="create_contact_us",
    ),
]
