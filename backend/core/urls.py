# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from vulnerabilities.views import VulnerabilityViewSet

router = routers.DefaultRouter()
router.register(r"vulnerabilities", VulnerabilityViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]
