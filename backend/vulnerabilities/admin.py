# vulnerabilities/admin.py

from django.contrib import admin
from .models import Vulnerability

admin.site.register(Vulnerability)
