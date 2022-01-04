/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/apikeys": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.apikeys.id"];
          created_at?: parameters["rowFilter.apikeys.created_at"];
          user_id?: parameters["rowFilter.apikeys.user_id"];
          key?: parameters["rowFilter.apikeys.key"];
          mode?: parameters["rowFilter.apikeys.mode"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["apikeys"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** apikeys */
          apikeys?: definitions["apikeys"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.apikeys.id"];
          created_at?: parameters["rowFilter.apikeys.created_at"];
          user_id?: parameters["rowFilter.apikeys.user_id"];
          key?: parameters["rowFilter.apikeys.key"];
          mode?: parameters["rowFilter.apikeys.mode"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.apikeys.id"];
          created_at?: parameters["rowFilter.apikeys.created_at"];
          user_id?: parameters["rowFilter.apikeys.user_id"];
          key?: parameters["rowFilter.apikeys.key"];
          mode?: parameters["rowFilter.apikeys.mode"];
        };
        body: {
          /** apikeys */
          apikeys?: definitions["apikeys"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/app_versions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.app_versions.id"];
          created_at?: parameters["rowFilter.app_versions.created_at"];
          app_id?: parameters["rowFilter.app_versions.app_id"];
          name?: parameters["rowFilter.app_versions.name"];
          bucket_id?: parameters["rowFilter.app_versions.bucket_id"];
          user_id?: parameters["rowFilter.app_versions.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["app_versions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** app_versions */
          app_versions?: definitions["app_versions"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.app_versions.id"];
          created_at?: parameters["rowFilter.app_versions.created_at"];
          app_id?: parameters["rowFilter.app_versions.app_id"];
          name?: parameters["rowFilter.app_versions.name"];
          bucket_id?: parameters["rowFilter.app_versions.bucket_id"];
          user_id?: parameters["rowFilter.app_versions.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.app_versions.id"];
          created_at?: parameters["rowFilter.app_versions.created_at"];
          app_id?: parameters["rowFilter.app_versions.app_id"];
          name?: parameters["rowFilter.app_versions.name"];
          bucket_id?: parameters["rowFilter.app_versions.bucket_id"];
          user_id?: parameters["rowFilter.app_versions.user_id"];
        };
        body: {
          /** app_versions */
          app_versions?: definitions["app_versions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/apps": {
    get: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.apps.created_at"];
          app_id?: parameters["rowFilter.apps.app_id"];
          icon_url?: parameters["rowFilter.apps.icon_url"];
          user_id?: parameters["rowFilter.apps.user_id"];
          name?: parameters["rowFilter.apps.name"];
          last_version?: parameters["rowFilter.apps.last_version"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["apps"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** apps */
          apps?: definitions["apps"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.apps.created_at"];
          app_id?: parameters["rowFilter.apps.app_id"];
          icon_url?: parameters["rowFilter.apps.icon_url"];
          user_id?: parameters["rowFilter.apps.user_id"];
          name?: parameters["rowFilter.apps.name"];
          last_version?: parameters["rowFilter.apps.last_version"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.apps.created_at"];
          app_id?: parameters["rowFilter.apps.app_id"];
          icon_url?: parameters["rowFilter.apps.icon_url"];
          user_id?: parameters["rowFilter.apps.user_id"];
          name?: parameters["rowFilter.apps.name"];
          last_version?: parameters["rowFilter.apps.last_version"];
        };
        body: {
          /** apps */
          apps?: definitions["apps"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/channels": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.channels.id"];
          created_at?: parameters["rowFilter.channels.created_at"];
          name?: parameters["rowFilter.channels.name"];
          app_id?: parameters["rowFilter.channels.app_id"];
          version?: parameters["rowFilter.channels.version"];
          users?: parameters["rowFilter.channels.users"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["channels"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** channels */
          channels?: definitions["channels"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.channels.id"];
          created_at?: parameters["rowFilter.channels.created_at"];
          name?: parameters["rowFilter.channels.name"];
          app_id?: parameters["rowFilter.channels.app_id"];
          version?: parameters["rowFilter.channels.version"];
          users?: parameters["rowFilter.channels.users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.channels.id"];
          created_at?: parameters["rowFilter.channels.created_at"];
          name?: parameters["rowFilter.channels.name"];
          app_id?: parameters["rowFilter.channels.app_id"];
          version?: parameters["rowFilter.channels.version"];
          users?: parameters["rowFilter.channels.users"];
        };
        body: {
          /** channels */
          channels?: definitions["channels"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.users.created_at"];
          image_url?: parameters["rowFilter.users.image_url"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          country?: parameters["rowFilter.users.country"];
          email?: parameters["rowFilter.users.email"];
          id?: parameters["rowFilter.users.id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.users.created_at"];
          image_url?: parameters["rowFilter.users.image_url"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          country?: parameters["rowFilter.users.country"];
          email?: parameters["rowFilter.users.email"];
          id?: parameters["rowFilter.users.id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.users.created_at"];
          image_url?: parameters["rowFilter.users.image_url"];
          first_name?: parameters["rowFilter.users.first_name"];
          last_name?: parameters["rowFilter.users.last_name"];
          country?: parameters["rowFilter.users.country"];
          email?: parameters["rowFilter.users.email"];
          id?: parameters["rowFilter.users.id"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  apikeys: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: uuid */
    user_id: string;
    /** Format: character varying */
    key: string;
    /**
     * Format: public.key_mode
     * @default read
     */
    mode: "read" | "write" | "all";
  };
  app_versions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: character varying
     * @description Note:
     * This is a Foreign Key to `apps.app_id`.<fk table='apps' column='app_id'/>
     */
    app_id: string;
    /** Format: character varying */
    name: string;
    /** Format: character varying */
    bucket_id: string;
    /** Format: uuid */
    user_id: string;
  };
  apps: {
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    app_id: string;
    /** Format: character varying */
    icon_url: string;
    /** Format: uuid */
    user_id: string;
    /** Format: character varying */
    name?: string;
    /** Format: character varying */
    last_version?: string;
  };
  channels: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    name?: string;
    /**
     * Format: character varying
     * @description Note:
     * This is a Foreign Key to `apps.app_id`.<fk table='apps' column='app_id'/>
     */
    app_id?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `app_versions.id`.<fk table='app_versions' column='id'/>
     */
    version?: number;
    /** Format: ARRAY */
    users?: unknown[];
  };
  users: {
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    image_url?: string;
    /** Format: character varying */
    first_name?: string;
    /** Format: character varying */
    last_name?: string;
    /** Format: character varying */
    country?: string;
    /** Format: character varying */
    email: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
  };
}

export interface parameters {
  /** @description Preference */
  preferParams: "params=single-object";
  /** @description Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** @description Preference */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description apikeys */
  "body.apikeys": definitions["apikeys"];
  /** Format: bigint */
  "rowFilter.apikeys.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.apikeys.created_at": string;
  /** Format: uuid */
  "rowFilter.apikeys.user_id": string;
  /** Format: character varying */
  "rowFilter.apikeys.key": string;
  /** Format: public.key_mode */
  "rowFilter.apikeys.mode": string;
  /** @description app_versions */
  "body.app_versions": definitions["app_versions"];
  /** Format: bigint */
  "rowFilter.app_versions.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.app_versions.created_at": string;
  /** Format: character varying */
  "rowFilter.app_versions.app_id": string;
  /** Format: character varying */
  "rowFilter.app_versions.name": string;
  /** Format: character varying */
  "rowFilter.app_versions.bucket_id": string;
  /** Format: uuid */
  "rowFilter.app_versions.user_id": string;
  /** @description apps */
  "body.apps": definitions["apps"];
  /** Format: timestamp with time zone */
  "rowFilter.apps.created_at": string;
  /** Format: character varying */
  "rowFilter.apps.app_id": string;
  /** Format: character varying */
  "rowFilter.apps.icon_url": string;
  /** Format: uuid */
  "rowFilter.apps.user_id": string;
  /** Format: character varying */
  "rowFilter.apps.name": string;
  /** Format: character varying */
  "rowFilter.apps.last_version": string;
  /** @description channels */
  "body.channels": definitions["channels"];
  /** Format: bigint */
  "rowFilter.channels.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.channels.created_at": string;
  /** Format: character varying */
  "rowFilter.channels.name": string;
  /** Format: character varying */
  "rowFilter.channels.app_id": string;
  /** Format: bigint */
  "rowFilter.channels.version": string;
  /** Format: ARRAY */
  "rowFilter.channels.users": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: timestamp with time zone */
  "rowFilter.users.created_at": string;
  /** Format: character varying */
  "rowFilter.users.image_url": string;
  /** Format: character varying */
  "rowFilter.users.first_name": string;
  /** Format: character varying */
  "rowFilter.users.last_name": string;
  /** Format: character varying */
  "rowFilter.users.country": string;
  /** Format: character varying */
  "rowFilter.users.email": string;
  /** Format: uuid */
  "rowFilter.users.id": string;
}

export interface operations {}

export interface external {}
